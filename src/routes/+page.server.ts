import type { PageServerLoad, Actions } from './$types.js';
import { json } from '@sveltejs/kit'
async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
export const load: PageServerLoad = async ({ }) => {

    return {

    };
};

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData()
        const name = data.get("name")
        const auto = data.get("auto")
        const phone = data.get("phone")
        const option = data.get("option")

        console.log(data)
        const token = "6057931970:AAHT8ej7iNY2BTq-RWWN0Ftap5R4VuiUBQY";
        const chatId = ["1809861870", "596613157"];


        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        for (let i = 0; i < chatId.length; i++) {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId[i],
                    text: `Имя: ${name}\nМарка авто: ${auto}\nТелефон: ${phone}\nЧто с машиной: ${option}`,
                    parse_mode: "html",

                }),

            };
            const response = await fetch(url, options)

        }
        return { success: true };
    }


} satisfies Actions;