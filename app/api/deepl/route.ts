import * as deepl from 'deepl-node';

const authKey = process.env.DEEPL_API_KEY as string;
const translator = new deepl.Translator(authKey);

// (async () => {
//     const targetLang: deepl.TargetLanguageCode = 'fr';
//     const results = await translator.translateText(
//         ['Hello, world!', 'How are you?'],
//         null,
//         targetLang,
//     );
//     results.map((result: deepl.TextResult) => {
//         console.log(result.text); // Bonjour, le monde !
//     });
// })();

export async function POST(request: Request) {
    const body = await request.json();
    const text = body.text as string;
}

