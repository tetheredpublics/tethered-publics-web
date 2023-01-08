import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    throw redirect(302, '/exhibitions/TZ5LoBmnao8gVGVMo2zeKH');
}