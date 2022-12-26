import Head from "next/head";
import styles from "../styles/Home.module.css";
import Output from "editorjs-react-renderer";

const mockData = {
    "time":1672074864607,
    "blocks":[
        {
            "id":"oEhcdfkZuP",
            "type":"header",
            "data":{
                "text":"Editor.js",
                "level":2
            }
        },
        {
            "id":"hA6SpjUeDi",
            "type":"paragraph",
            "data":{
                "text":"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
        {
            "id":"PiEHcjD1Yz",
            "type":"header",
            "data":{
                "text":"Key features",
                "level":3
            }
        },
        {
            "id":"3vOLCaaPH7",
            "type":"list",
            "data":{
                "style":"unordered",
                "items":[
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",
                    "Designed to be extendable and pluggable with a simple API"
                ]
            }
        },
        {
            "id":"bkHPZ3YE7r",
            "type":"header",
            "data":{
                "text":"What does it mean «block-styled editor»",
                "level":3
            }
        },
        {
            "id":"069hKstvEf",
            "type":"paragraph",
            "data":{
                "text":"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
        },
        {
            "id":"Sx98j1fyZn",
            "type":"foo",
            "data":{
                "text":"Title This is a title",
                "status":"open",
                "fk":"fk-a9b1586e-b90c-4c2f-b70a-355a69d0fcea",
                "items":1
            }
        },
        {
            "id":"fp9GU7VQJd",
            "type":"paragraph",
            "data":{
                "text":"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js&nbsp;<mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
        },
        {
            "id":"2T3tb5HnRt",
            "type":"paragraph",
            "data":{
                "text":"There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
            }
        },
        {
            "id":"I4An07kXIH",
            "type":"header",
            "data":{
                "text":"What does it mean clean data output",
                "level":3
            }
        },
        {
            "id":"JRZAr30iLx",
            "type":"paragraph",
            "data":{
                "text":"Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
            }
        },
        {
            "id":"bQYqDTC958",
            "type":"paragraph",
            "data":{
                "text":"Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
            }
        },
        {
            "id":"tslVJDxRX_",
            "type":"paragraph",
            "data":{
                "text":"Clean data is useful to sanitize, validate and process on the backend."
            }
        },
        {
            "id":"Xb5Dh_Wy8g",
            "type":"delimiter",
            "data":{

            }
        },
        {
            "id":"z8vmJLa6U5",
            "type":"paragraph",
            "data":{
                "text":"We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
            }
        },
        {
            "id":"y2CS1TANrr",
            "type":"image",
            "data":{
                "file":{
                    "url":"https://codex.so/public/app/img/external/codex2x.png"
                },
                "caption":"",
                "withBorder":false,
                "stretched":false,
                "withBackground":false
            }
        }
    ],
    "version":"2.26.4"
}
const ToggleBlockRendered = ({data, style, classNames, config}) => {
    let content = null;

    if (typeof data === 'string') content = data;
    else if (typeof data === 'object' && data.imageURL && typeof data.imageURL === 'string') content = data.imageURL;

    return content ? <h1 style={ style } className={ classNames } >{ content }</h1> : 'WUT';
}

const renderers = {
    foo: ToggleBlockRendered
}

export default function Article() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div>
                    <Output renderers={renderers} data={ mockData } />
                </div>
            </main>
        </>
    )
}