/**
 * Replace the formula blocks in the text 
 * into '{}' forms to avoid translate issues
 * 
 * @param {String} text 
 * @returns stripped text and formulas
 */

function replaceBlock(text) {
    var res = "", formula_tmp = "";
    var formula = [], cur_brace = 1;  // 1 for {, 0 for }
    for (var i = 0; i < text.length; i++) {
        if (text[i] === '$') {
            res += cur_brace ? '{' : '}';
            if (cur_brace === 0) {
                formula.push(formula_tmp);
                formula_tmp = "";
            }
            cur_brace ^= 1;
        } else {
            if (cur_brace === 0) {
                formula_tmp += text[i];
            } else {
                res += text[i];
            }
        }
    }
    return {stripped: res, formula: formula};
}

/**
 * Recover the formula into translated text
 * 
 * @param {String} translated_text translated text
 * @param {Array} formula list of formulas
 */
function recoverBlock(translated_text, formula) {
    
}

/**
 * Translate the text into Simplified Chinese
 * 
 * @param {*} text 
 * @returns translated text
 */
async function translate(text) {
   
}
