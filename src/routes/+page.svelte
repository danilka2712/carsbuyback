<script lang="ts">
    import { enhance } from "$app/forms";
    import CartsContent from "$lib/components/carts/carts-content.svelte";
    import Carts from "$lib/components/carts/carts.svelte";
    import type { SubmitFunction } from "@sveltejs/kit";
    import type { PageData, ActionData } from "./$types";
    import { onMount } from "svelte";
    import maplibregl from "maplibre-gl";
    const carts = [
        {
            id: 1,
            name: "Авто всех марок",
            description:
                "Мы покупаем автомобили всех марок и моделей, независимо от их состояния. Свяжитесь с нами сегодня, чтобы получить предложение!",
            image: "/1614546418_86-p-avto-na-belom-fone-100.webp",
            active: true,
        },
        {
            id: 2,
            name: " Битые, не на ходу",
            description:
                "Выкупаем битые автомобили и автомобили не на ходу. Мы предлагаем самые высокие цены на рынке и работаем быстро и без лишних хлопот.",
            image: "/Carsdtp.webp",
            active: true,
        },
        {
            id: 3,
            name: "Без документов",
            description:
                "Выкупим ваш автомобиль по хорошей цене, даже если у вас нет документов или он в залоге. Мы работаем с любыми автомобилями, независимо от их состояния или возраста.",
            image: "/kreditnie-1-1-1.webp",
            active: true,
        },
        {
            id: 4,
            name: "Отечественные",
            description:
                "Покупаем отечественные автомобили любых марок, моделей и годов выпуска. Неважно, в каком состоянии ваш автомобиль - мы выкупим его у вас уже сегодня.",
            image: "/lada_PNG101.webp",
            active: true,
        },
    ];
    let showAll = true;

    function toggleShowAll() {
        showAll = !showAll;
    }
    onMount(() => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            showAll = false;
        }
    });
    const sity = [
        "Азовский район",
        "Большереченский район",
        "Большеуковский район",
        "Горьковский район",
        "Знаменский район",
        "Исилькульский район",
        "Калачинский район",
        "Колосовский район",
        "Кормиловский район",
        "Крутинский район",
        "Любинский район",
        "Марьяновский район",
        "Москаленский район",
        "Муромцевский район",
        "Называевский район",
        "Нижнеомский район",
        "Нововаршавский район",
        "Одесский район",
        "Оконешниковский район",
        "Омский район",
        "Павлоградский район",
        "Полтавский район",
        "Русско-Полянский район",
        "Саргатский район",
        "Седельниковский район",
        "Таврический район",
        "Тарский район",
        "Тевризский район",
        "Тюкалинский район",
        "Усть-Ишимский район",
        "Черлакский район",
        "Шербакульский район",
    ];

    type LOAD = "ОТПРАВИТЬ" | "ОТПРАВКА" | "ОТПРАВЛЕНО";
    let loading: LOAD = "ОТПРАВИТЬ";

    const addTodo: SubmitFunction = ({ form, data, action, cancel }) => {
        loading = "ОТПРАВКА";
        return async ({ result, update }) => {
            loading = "ОТПРАВЛЕНО";
            await update();
        };
    };
</script>

<section class=" bg-white sm:pb-32 pb-24 sm:px-16 px-4">
    <h1
        class="sm:text-8xl text-3xl font-light sm:pt-28 pt-20 sm:w-11/12 sm:leading-[6.7rem] sm:mb-8 mb-5"
    >
        Выкуп любых авто по Лучшей цене в Омске
    </h1>
    <p class="sm:w-2/4 sm:text-3xl font-light mb-12">
        Битые, неисправные, кредитные, в залоге, с запретами, без документов и
        птс, проблемные и т.д.
    </p>
    <a href="#form" class="bg-black text-white p-4 rounded-full px-8"
        >Оставить заявку</a
    >
</section>

<section class=" bg-white sm:px-16 px-4 pb-8">
    <div class="flex items-center justify-between h-32 w-full">
        <div class="items-wrap">
            <div class="items marquee">
                <img class="w-20 item" src="/cars/Honda.svg" alt="" />
                <img class="w-20 item" src="/cars/Infiniti.svg" alt="" />
                <img class="w-20 item" src="/cars/jeep.svg" alt="" />
                <img class="w-20 item" src="/cars/KIA.svg" alt="" />
                <img class="w-20 item" src="/cars/lada.svg" alt="" />
                <img class="w-20 item" src="/cars/Nissan.svg" alt="" />
                <img class="w-20 item" src="/cars/Volvo.svg" alt="" />
            </div>
            <div aria-hidden="true" class="items marquee">
                <img class="w-20 item" src="/cars/Honda.svg" alt="" />
                <img class="w-20 item" src="/cars/Infiniti.svg" alt="" />
                <img class="w-20 item" src="/cars/jeep.svg" alt="" />
                <img class="w-20 item" src="/cars/KIA.svg" alt="" />
                <img class="w-20 item" src="/cars/lada.svg" alt="" />
                <img class="w-20 item" src="/cars/Nissan.svg" alt="" />
                <img class="w-20 item" src="/cars/Volvo.svg" alt="" />
            </div>
        </div>
    </div>
</section>

<section class=" bg-white sm:px-16 px-4 sm:pb-32 pb-24">
    <div class="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
        {#each carts as сart}
            <Carts>
                <CartsContent
                    title={сart.name}
                    description={сart.description}
                />
            </Carts>
        {/each}
    </div>
</section>

<section class="bg-white sm:px-16 px-4 sm:pb-32 pb-24">
    <div class="grid sm:grid-cols-3 grid-cols-1">
        <h2 class="sm:text-5xl font-light text-3xl sm:pb-0 pb-4 col-span-2">
            Как происходит <br /> сделка
        </h2>
        <p class="text-gray-500 tracking-wide font-light sm:text-lg col-span-1">
            Специалист приезжает в назначенное время, осматривает автомобиль.
            Если стоимость оценки вас устраивает, составляется договор
            купли-продажи, и расчет с вами наличными или переводом на карту.
        </p>
    </div>
    <div class="grid xl:grid-cols-4 grid-cols-2 lg:mt-14 pt-12 gap-4 lg:gap-28">
        <div
            class="flex items-center justify-center bg-[#f8ede3] animate-wiggle cursor-pointer h-62 relative p-4"
        >
            <p
                class="text-center sm:font-normal font-light sm:text-xl text-lg w-full p-5"
            >
                Оставьте заявку на сайте
            </p>
        </div>

        <div
            class="flex items-center justify-center bg-[#f1f6f5] h-52 relative p-4"
        >
            <p
                class="text-center sm:font-normal font-light sm:text-xl text-lg p-5"
            >
                Мы перезвоним вам течение 15 минут
            </p>
        </div>

        <div
            class="flex items-center justify-center bg-[#f8f8f8] h-52 relative p-4"
        >
            <p
                class="text-center sm:font-normal font-light sm:text-xl text-lg p-5"
            >
                Приедем на осмотр в течение дня
            </p>
        </div>

        <div
            class="flex items-center justify-center bg-zinc-100/50 h-52 relative p-4"
        >
            <p
                class="text-center sm:font-normal font-light sm:text-xl text-lg p-5"
            >
                Составим договор и рассчитаемся
            </p>
        </div>
    </div>
</section>

<section
    class="bg-white sm:px-16 px-4 sm:pb-32 pb-24 flex flex-col-reverse sm:flex-row sm:gap-28 gap-14"
>
    <div class="grid grid-cols-2 sm:w-1/2 sm:gap-6 gap-4">
        <div class="h-fit bg-slate-100">
            <img class=" h-54" src="/images/skoda-octavia-2014.jpg" alt="" />
        </div>
        <div class="h-fit bg-slate-100">
            <img class=" h-54" src="/images/renault-duster-2012.jpg" alt="" />
        </div>
        <div class="h-fit bg-slate-100">
            <img class=" h-54" src="/images/santa-fe-2013.jpg" alt="" />
        </div>
        <div class="h-fit bg-slate-100">
            <img class=" h-54" src="/images/renault-logan-2008.jpg" alt="" />
        </div>
    </div>
    <div class=" sm:w-1/2 flex flex-col justify-center">
        <h2 class="sm:text-5xl font-light text-3xl sm:pb-0 pb-4 col-span-2">
            Выкупленные авто
        </h2>
        <p class="text-gray-500 tracking-wide font-light sm:text-lg">
            Специалист приезжает в назначенное время, осматривает автомобиль.
            Если стоимость оценки вас устраивает, составляется договор
            купли-продажи, и расчет с вами наличными или переводом на карту.
        </p>
        <button
            class="bg-black text-white p-4 w-fit sm:mt-10 mt-6 rounded-full px-8"
            >Оставить заявку</button
        >
    </div>
</section>
<section class="bg-white sm:px-16 sm:pb-24 pb-24 px-4">
    <div class="">
        <h2
            class="sm:text-5xl sm:text-center font-light text-3xl sm:pb-0 pb-4 col-span-2 mb-4"
        >
            Выкупаем автомобили <br />
            по всей области
        </h2>
    </div>
    <div class="lg:mt-12 mt-8 w-full flex lg:flex-row flex-col justify-between">
        <ul
            class="grid list-disc marker:text-orange-200 marker:text-3xl lg:grid-cols-4 grid-cols-1 list-inside w-full gap-2"
        >
            {#if !showAll}
                {#each sity.slice(0, 6) as s, i}
                    <li class="lg:text-lg text-black/70">{s}</li>
                {/each}
            {:else}
                {#each sity as s, i}
                    <li class="lg:text-lg text-black/70">{s}</li>
                {/each}
            {/if}
        </ul>
        <button
            aria-pressed="false"
            type="button"
            name="overflow"
            class="text-green-600 w-fit hover:text-green-700 font-medium mt-6 flex lg:hidden"
            on:click={toggleShowAll}
        >
            {showAll ? "Скрыть" : "Показать все"}
        </button>
    </div>
</section>

<section
    id="form"
    class="bg-white sm:px-16 px-4 sm:py-12 sm:pb-32 flex sm:flex-row flex-col"
>
    <div class=" sm:w-1/2 flex flex-col justify-center sm:mb-0 mb-12">
        <h2
            class="sm:text-5xl font-light lg:w-2/3 text-3xl sm:pb-0 pb-4 col-span-2"
        >
            Оставьте заявку
        </h2>
        <p class="text-gray-500 lg:w-2/3 tracking-wide font-light sm:text-lg">
            Не откладывайте на завтра то, что можно сделать сегодня! Оставьте
            заявку на сайте прямо сейчас и мы выкупим ваш автомобиль уже
            сегодня.
        </p>
    </div>
    <div class="sm:w-1/2">
        <form class="bg-[#f1f6f5] sm:p-14 p-4 py-12" action="" method="get">
            <label class="block mb-7">
                <span class="text-gray-700 text-xs uppercase">Ваше имя</span>
                <input
                    type="text"
                    class="p-4 border border-zinc-200 mt-2 block w-full"
                    placeholder=""
                />
            </label>
            <label class="block mb-7">
                <span class="text-gray-700 text-xs uppercase"
                    >Марка/Модель автомобиля</span
                >
                <input
                    type="text"
                    class="p-4 border border-zinc-200 mt-2 block w-full"
                    placeholder=""
                />
            </label>
            <label class="block mb-7">
                <span class="text-gray-700 text-xs uppercase"
                    >Номер телефона</span
                >
                <input
                    type="text"
                    class="p-4 mt-2 border border-zinc-200 block w-full"
                    placeholder=""
                />
            </label>

            <label class="block mb-7">
                <span class="text-gray-700 text-xs uppercase"
                    >Как с вами связаться</span
                >
                <select class="p-4 mt-2 border border-zinc-200 block w-full">
                    <option>По телефону</option>
                    <option>Whatsapp</option>
                    <option>Telegram</option>
                </select>
            </label>
            <button class="bg-black text-white p-4 w-fit rounded-full px-8"
                >Оставить заявку</button
            >
        </form>
    </div>
</section>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.50);
    }

    .items-wrap {
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: 20px;
    }
    .items-wrap:before,
    .items-wrap:after {
        content: "";
        height: 100%;
        top: 0;
        width: 10%;
        position: absolute;
        z-index: 1;
        pointer-events: none;
    }
    .items-wrap:before {
        left: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }
    .items-wrap:after {
        right: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
    }
    .items {
        flex-shrink: 0;
        display: flex;
        gap: 20px;
        counter-reset: item;
        justify-content: space-around;
        min-width: 100%;
    }
    .item {
        flex: 0 0 auto;
        width: 80px;
        height: 80px;
        counter-increment: item;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        margin: 10px 0;
        transition: all 0.1s ease-in-out;
    }
    @media (max-width: 1140px) {
        .item {
            width: 70px;
            height: 70px;
        }
        .items {
            gap: 40px;
        }
        .items-wrap {
            gap: 40px;
        }
    }
    .marquee {
        animation: scroll 20s linear infinite;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - 20px));
        }
    }
</style>
