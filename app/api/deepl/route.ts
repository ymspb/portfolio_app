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

export async function POST(req: Request) {
    const body = await req.json();
    const text = body.text as string;
    console.log(body.translateTo, body.translateFrom)
    const targetLang: deepl.TargetLanguageCode = body.translateTo;
    const sourceLang: deepl.SourceLanguageCode = body.translateFrom;

    const result = await translator.translateText(
        text,
        sourceLang,
        targetLang
    );
    console.log(result);
    return Response.json({translated: result.text});
    // return Response.json({translated: ""});
}

