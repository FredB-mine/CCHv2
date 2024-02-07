/**
 * Replace the formula blocks in the text
 * into '{}' forms to avoid translate issues
 *
 * @param {String} text
 * @returns stripped text and formulas
 */

function replaceBlock(text) {
    var res = "";
    var formula_tmp = "";
    var formula = [];
    var cur_brace = 1; // 1 for {, 0 for }
    for (var i = 0; i < text.length; i++) {
        if (text[i] === "$") {
            res += cur_brace ? "[" : "]";
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
    return { text: res, formula: formula };
}
/**
 * Recover the formula into translated text
 *
 * @param {String} text translated text
 * @param {Array} formula list of formulas
 */
function recoverBlock(text, formula) {
    var res = "";
    for (var i = 0, j = 0; i < text.length - 1; i++) {
        if (text[i] === "[" && text[i + 1] === "]") {
            (res += "$$$" + formula[j++] + "$$$"), i++;
        } else if (text[i] !== "]") {
            res += text[i];
        }
    }
    return res;
}

const { translate } = require("bing-translate-api");
