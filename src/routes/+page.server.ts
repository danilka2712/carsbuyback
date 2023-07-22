import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {

    return {

    };
};

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData()

        const text = data.get("text")
        const token = "6057931970:AAHT8ej7iNY2BTq-RWWN0Ftap5R4VuiUBQY";
        const chatId = "596613157";

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `${text}`,
                parse_mode: "html",
            }),
        };
        const response = await fetch(url, options);
        return { success: true };

    }

}