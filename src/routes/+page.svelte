<script lang="ts">
    import CartsContent from "$lib/components/carts/carts-content.svelte";
    import Carts from "$lib/components/carts/carts.svelte";

    const carts = [
        {
            id: 1,
            name: "Авто всех марок",
            description:
                "Cпециализируемся на покупке автомобилей любых марок и моделей, включая элитные, залоговые, кредитные, подержанные,битые, с запретом на регистрацию, коммерческие и другие",
            image: "/1614546418_86-p-avto-na-belom-fone-100.webp",
            active: true,
        },
        {
            id: 2,
            name: " Битые, не на ходу",
            description:
                "Cпециализируемся на покупке автомобилей любых марок и моделей, включая элитные, залоговые, кредитные, подержанные,битые, с запретом на регистрацию, коммерческие и другие",
            image: "/Carsdtp.webp",
            active: true,
        },
        {
            id: 3,
            name: "Без документов",
            description:
                "Cпециализируемся на покупке автомобилей любых марок и моделей, включая элитные, залоговые, кредитные, подержанные,битые, с запретом на регистрацию, коммерческие и другие",
            image: "/kreditnie-1-1-1.webp",
            active: true,
        },
        {
            id: 4,
            name: "Отечественные",
            description:
                "Cпециализируемся на покупке автомобилей любых марок и моделей, включая элитные, залоговые, кредитные, подержанные,битые, с запретом на регистрацию, коммерческие и другие",
            image: "/lada_PNG101.webp",
            active: true,
        },
    ];
</script>

<section class=" bg-white sm:pb-32 pb-24 sm:px-16 px-4">
    <h1
        class="sm:text-8xl text-3xl font-light sm:pt-28 pt-20 sm:w-11/12 sm:leading-[6.7rem] sm:mb-8 mb-5"
    >
        Выкуп любых авто по Лучшей цене в Омске
    </h1>
    <p class="sm:w-2/4 sm:text-2xl font-light sm:mb-12 mb-6">
        Битые, неисправные, кредитные, в залоге, с запретами, без документов и
        птс, проблемные и т.д.
    </p>
    <button class="bg-black text-white p-4 rounded-full px-8"
        >Оставить заявку</button
    >
</section>

<section class="hidden bg-white px-16 pb-16">
    <div class="flex items-center justify-between">
        <img class="w-20" src="/cars/Honda.svg" alt="" />
        <img class="w-20" src="/cars/Infiniti.svg" alt="" />
        <img class="w-20" src="/cars/jeep.svg" alt="" />
        <img class="w-20" src="/cars/KIA.svg" alt="" />
        <img class="w-20" src="/cars/lada.svg" alt="" />
        <img class="w-20" src="/cars/Nissan.svg" alt="" />
        <img class="w-20" src="/cars/Volvo.svg" alt="" />
    </div>
</section>

<section class=" bg-white sm:px-16 px-4 sm:pb-32 pb-24">
    <div class="grid lg:grid-cols-4 grid-cols-1 sm:gap-8 gap-4">
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
        <h2 class="sm:text-5xl text-2xl sm:pb-0 pb-4 col-span-2 sm:w-96">
            Как происходит сделка
        </h2>
        <p class="text-gray-500 tracking-wide font-light sm:text-lg col-span-1">
            Специалист приезжает в назначенное время, осматривает автомобиль.
            Если стоимость оценки вас устраивает, составляется договор
            купли-продажи, и расчет с вами наличными или переводом на карту.
        </p>
    </div>
    <div class="grid sm:grid-cols-11 grid-cols-2 lg:mt-14 pt-12 gap-2">
        <div
            class="flex sm:col-span-2 items-center justify-center bg-black text-white animate-wiggle cursor-pointer h-58 relative"
        >
            <p
                class="text-center text-white font-medium sm:text-xl text-lg w-full p-5"
            >
                Оставьте заявку на сайте
            </p>
            <p
                class="bg-white/90 w-6 h-6 rounded-full text-black items-center flex justify-center absolute top-4 left-4"
            >
                1
            </p>
        </div>
        <div
            class="lg:flex hidden col-span-1 h-52 items-center justify-center"
        />
        <div
            class="flex items-center justify-center sm:col-span-2 bg-zinc-100/50 h-52 relative"
        >
            <p class="text-center sm:text-xl text-lg p-5">
                Мы перезвоним вам течение 15 минут
            </p>
            <p
                class="bg-zinc-200 w-6 h-6 rounded-full items-center flex justify-center absolute top-4 left-4"
            >
                2
            </p>
        </div>
        <div
            class="lg:flex hidden col-span-1 h-52 items-center justify-center"
        />

        <div
            class="flex items-center justify-center bg-zinc-100/50 h-52 sm:col-span-2 relative"
        >
            <p class="text-center sm:text-xl text-lg p-5">
                Приедем на осмотр в течение дня
            </p>
            <p
                class="bg-zinc-200 w-6 h-6 rounded-full items-center flex justify-center absolute top-4 left-4"
            >
                3
            </p>
        </div>
        <div
            class=" col-span-1 h-52 items-center justify-center lg:flex hidden"
        />

        <div
            class="flex items-center justify-center bg-zinc-100/50 h-52 sm:col-span-2 relative"
        >
            <p class="text-center sm:text-xl text-lg p-5">
                Составим договор и рассчитаемся
            </p>
            <p
                class="bg-zinc-200 w-6 h-6 rounded-full items-center flex justify-center absolute top-4 left-4"
            >
                4
            </p>
        </div>
    </div>
</section>

<section class="bg-white h-screen sm:px-16 px-4">1</section>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.50);
    }
</style>
