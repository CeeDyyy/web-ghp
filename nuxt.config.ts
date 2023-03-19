
export default defineNuxtConfig({
    app: {
        head: {
            title: 'UPK Asia - Engineering',
            meta: [
                { name: 'description', content: 'UPK Asia - Engineering' },
                { hid: 'og:image', property: 'og:image', content: '@/assets/logo.png' }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css', '@fortawesome/fontawesome-free/css/all.css'],
    build: {
        transpile: ['vuetify']
    },
    modules: [
        '@pinia/nuxt'
    ]
})
