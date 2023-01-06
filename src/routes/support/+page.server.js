/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('subject');
        const message = data.get('message');

        console.log(data)
        return { success: true };
    }
};