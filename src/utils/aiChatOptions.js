import { FaQuestionCircle, FaBookOpen, FaQuestion } from "react-icons/fa";
import { MdGTranslate, MdEmojiEmotions, MdCode, MdOutlineVpnKey, MdOutlineProductionQuantityLimits, MdBook, MdMood } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { GiRiceCooker, GiCardJoker } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";

export const aiChatOptions = [
    {
        id: 1,
        title: 'Q&A',
        description: 'Answer questions based on existing knowledge.',
        model: {
            model: "text-davinci-003",
            placeholder: "Where were the 1992 Olympics held?",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        },
        endpoint: 'qna',
        icon: <FaQuestionCircle className="text-4xl"></FaQuestionCircle>
    },
    {
        id: 2,
        title: 'Grammar correction',
        description: 'Corrects sentences into standard English.',
        model: {
            model: "text-davinci-003",
            placeholder: "She no went to the market.",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'grammar-correction',
        icon: <FaBookOpen className="text-4xl"></FaBookOpen>
    },
    {
        id: 3,
        title: 'English to Bengali',
        description: 'Translates English text into Bengali',
        model: {
            model: "text-davinci-003",
            placeholder: "What rooms do you have available?",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'english-to-bengali',
        icon: <MdGTranslate className="text-4xl"></MdGTranslate>
    },
    {
        id: 4,
        title: 'Movie to Emoji',
        description: 'Convert movie titles into emoji.',
        model: {
            model: "text-davinci-003",
            placeholder: "Write any movie name here...",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        },
        endpoint: 'movie-to-emoji',
        icon: <MdEmojiEmotions className="text-4xl"></MdEmojiEmotions>
    },
    {
        id: 5,
        title: 'Explain Code',
        description: 'Explain a complicated piece of code.',
        model: {
            model: "code-davinci-002",
            placeholder: "Place any short code here....",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        },
        endpoint: 'explain-code',
        icon: <MdCode className="text-4xl"></MdCode>
    },
    {
        id: 6,
        title: 'Keywords',
        description: 'Extract keywords from a block of text.',
        model: {
            model: "text-davinci-003",
            placeholder: "Type anything to get keywords.... ",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        },
        endpoint: 'keywords',
        icon: <MdOutlineVpnKey className="text-4xl"></MdOutlineVpnKey>
    },
    {
        id: 7,
        title: 'Ad from product description',
        description: 'Turn a product description into ad copy.',
        model: {
            model: "text-davinci-003",
            placeholder: "Write short description of a product.....",
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'product-ad',
        icon: <MdOutlineProductionQuantityLimits className="text-4xl"></MdOutlineProductionQuantityLimits>
    },
    {
        id: 8,
        title: 'Science fiction book list maker',
        description: 'Create a list of items for a given topic.',
        model: {
            model: "text-davinci-003",
            placeholder: "List 5 science fiction books:",
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.52,
            presence_penalty: 0.5,
            stop: ["11."],
        },
        endpoint: 'book-list',
        icon: <MdBook className="text-4xl"></MdBook>
    },
    {
        id: 9,
        title: 'Mood to Color',
        description: 'Turn a text description into a color.',
        model: {
            model: "text-davinci-003",
            placeholder: "A blue sky at dusk....",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [";"],
        },
        endpoint: 'mod-to-color',
        icon: <MdMood className="text-4xl"></MdMood>
    },
    {
        id: 10,
        title: 'JavaScript one line function',
        description: 'Turn a JavaScript function into a one liner.',
        model: {
            model: "code-davinci-002",
            placeholder: "array.forEach((item) => {\n    array2.push(item);\n});\n\nJavaScript one line version:",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [";"],
        },
        endpoint: 'js-one-liner',
        icon: <BiCodeCurly className="text-4xl"></BiCodeCurly>
    },
    {
        id: 11,
        title: 'Recipe creator (eat at your own risk)',
        description: 'Create a recipe from a list of ingredients.',
        model: {
            model: "text-davinci-003",
            placeholder: "Write some food ingredients name.....",
            temperature: 0.3,
            max_tokens: 120,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'recipe-creator',
        icon: <GiRiceCooker className="text-4xl"></GiRiceCooker>
    },
    {
        id: 12,
        title: 'Marv the sarcastic chat bot',
        description: 'Marv is a factual chatbot that is also sarcastic.',
        model: {
            model: "text-davinci-003",
            placeholder: "What time is it?",
            temperature: 0.5,
            max_tokens: 60,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        },
        endpoint: 'sarcastic-chat-bot',
        icon: <GiCardJoker className="text-4xl"></GiCardJoker>
    },
    {
        id: 13,
        title: 'Create study notes',
        description: 'Provide a topic and get study notes.',
        model: {
            model: "text-davinci-003",
            placeholder: "What are 5 key points I should know when studying Tailwind CSS?",
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'study-notes',
        icon: <GrNotes className="text-4xl"></GrNotes>
    },
    {
        id: 14,
        title: 'Interview questions',
        description: 'Create interview questions.',
        model: {
            model: "text-davinci-003",
            placeholder: "React JS Interview Questions?",
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        endpoint: 'interview-questions',
        icon: <FaQuestion className="text-4xl"></FaQuestion>
    },
]