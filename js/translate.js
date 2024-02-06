var lang_list = [
    "auto",
    "zh",
    "en",
    "yue",
    "wyw",
    "jp",
    "kor",
    "fra",
    "spa",
    "th",
    "ara",
    "ru",
    "pt",
    "de",
    "it",
    "el",
    "nl",
    "pl",
    "bul",
    "est",
    "dan",
    "fin",
    "cs",
    "rom",
    "slo",
    "swe",
    "hu",
    "cht",
    "vie",
];
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
            (res += "$" + formula[j++] + "$"), i++;
        } else if (text[i] !== "]") {
            res += text[i];
        }
    }
    return res;
}
/**
 * Translate the text from $from_lang to $to_lang
 *
 * @param {String} query
 * @param {String} from_lang
 * @param {String} to_lang
 * @returns Translation query promise;
 */
function translate(query, from_lang, to_lang) {
    if (lang_list.indexOf(from_lang) === -1) {
        throw new Error("Invalid from_lang = " + from_lang);
    }
    if (lang_list.indexOf(to_lang) === -1) {
        throw new Error("Invalid to_lang = " + to_lang);
    }
    var appid = "20220602001236448";
    var key = "GtVUOpsUvCgfxjXsQ1iC";
    var salt = new Date().getTime();
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var sign = md5(appid + query + salt + key);
    return $.ajax({
        url: "https://api.fanyi.baidu.com/api/trans/vip/translate",
        type: "get",
        dataType: "jsonp",
        async: false,
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from_lang,
            to: to_lang,
            sign: sign,
            domain: "it",
        },
    });
}
