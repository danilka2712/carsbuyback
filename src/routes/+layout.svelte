<script lang="ts">
    import { Header, HeaderContent } from "$lib/components/Header/index.js";
    import "../app.css";
</script>

<svelte:head>
    <title>CARSBUYBACK – Выкуп авто | Омск</title>
    <meta
        name="description"
        content="Мы выкупим ваш автомобиль в любом состоянии, будь он битым, с пробегом или в кредите. Выезжаем на осмотр сразу после обращения и платим наличными сразу на месте. У нас более 300 положительных отзывов, и мы гарантируем, что вы получите лучшую цену за свой автомобиль."
    />

    <script type="application/ld+json">
        {
          "@context": "http://www.schema.org",
          "@type": "AutomotiveBusiness",
          "name": "CARSBUYBACK – Выкуп авто | Омск",
          "url": "https://vykup-auto-omsk.ru/",
          "logo": "https://vykup-auto-omsk.ru/logotype.svg",
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
    <slot />
</div>
