// Tag tempalte
//  adalhBentuk yang lebih kompleks dari template literal, memungkinkan kita untuk membaca template literalsmelalui sebuah function.

const nama = 'wahidan';
const umur = '20';
const email = 'wahidann765@gmial.com'

function highlight(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // })
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}


const str = highlight`Halo nama saya ${nama}, umur saya ${umur} tahun, dan email saya adalah ${email}.`
document.body.innerHTML = str;


// Penggunaan lain dari teag template
// > Escaping HTML tag => Menghindari script yang tidak di inginkan(sanitasi)
// > Translation dan Internationalizaation => sebagai alih bahas dari websitte kita
        // const html = il8n `hello ${name}, you have ${amount} : c in ypur bank account`
// > Styled Component => front end style
        // const title = style.h1`
        // font-size: 1.5em;
        // text-align: center;
        // color: salmon;
        // `;