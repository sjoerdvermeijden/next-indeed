export type Job = {
    id?: number | undefined,
    title: string,
    background_image: {
        alt: string,
        img: string,
    },
    thumbnail: string,
    company: string,
    description: string,
    short_description: string,
    salary: string,
    postal_code: string,
    placed: string,
    vacancy_language: string,
    contract_type: string,
    work_days: string,
    posted_on: string
}