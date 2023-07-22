<script lang="ts">
    import { Header, HeaderContent } from "$lib/components/Header/index.js";
    import "../app.css";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <title>Carsbuyback – Выкуп авто | Омск</title>
    <meta
        name="description"
        content="Мы выкупим ваш автомобиль в любом состоянии, будь он битым, с пробегом или в кредите. Выезжаем на осмотр сразу после обращения и платим наличными сразу на месте. У нас более 300 положительных отзывов, и мы гарантируем, что вы получите лучшую цену за свой автомобиль."
    />
    <meta property="og:title" content="Carsbuyback – Выкуп авто | Омск" />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">
        {
          "@context": "http://www.schema.org",
          "@type": "AutomotiveBusiness",
          "name": "Carsbuyback – Выкуп авто | Омск",
          "url": "https://carsbuyback.vercel.app/",
          "logo": "https://carsbuyback.vercel.app/logotype.svg",
          "description": "Мы выкупим ваш автомобиль в любом состоянии, будь он битым, с пробегом или в кредите. Выезжаем на осмотр сразу после обращения и платим наличными сразу на месте. У нас более 300 положительных отзывов, и мы гарантируем, что вы получите лучшую цену за свой автомобиль.",
          "address": {
             "@type": "PostalAddress",
             "addressRegion": "Омск",
             "addressCountry": "Россия"
          },
          "telephone": "+7 3812 592 639"
        }
    </script>
</svelte:head>
<div class=" z-50 relative">
    <Header>
        <HeaderContent>
            <svelte:fragment slot="logotype"
                ><img
                    src="/logotype.svg"
                    class="sm:w-48 w-44"
                    alt=""
                /></svelte:fragment
            >
        </HeaderContent>
    </Header>
    <main>
        <slot />
    </main>
</div>
