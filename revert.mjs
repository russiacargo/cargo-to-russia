import fs from 'fs/promises';

const INDEX_FILE = './blog/index.html';

async function revertGrid() {
    let html = await fs.readFile(INDEX_FILE, 'utf-8');
    
    // We added the string "<!-- Additional Articles -->" before the cards
    // The grid closes with `</div>\n      </div>\n    </section>`
    const startString = '<!-- Additional Articles -->';
    const endIndex = html.indexOf('</div>\n      </div>\n    </section>');
    const startIndex = html.indexOf(startString);
    
    if (startIndex !== -1 && endIndex !== -1) {
        // Just extract the part we added and replace it with the future item comment
        const pre = html.substring(0, startIndex);
        const post = html.substring(endIndex);
        
        const newHtml = pre + '<!-- Future items will flow into this grid seamlessly -->\n          \n        ' + post;
        await fs.writeFile(INDEX_FILE, newHtml);
        console.log('Grid reverted.');
    } else {
        console.log('Could not find injection boundaries.');
    }
}

revertGrid();
