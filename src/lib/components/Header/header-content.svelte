<script lang="ts">
    import { getContext, setContext } from "svelte";

    const items = [
        { text: "Главная", href: "/" },
        { text: "Главная", href: "/" },
        { text: "Главная", href: "/" },
    ];
</script>

<div
    class="flex justify-between items-center border-b border-gray-100 w-full pt-10 pb-6"
>
    <a class=" shrink-0" href="/"><slot name="logotype" /> </a>
    <a class="sm:flex hidden font-medium" href="tel:+79088002187"
        >+7 (908) 800 21 87 | 24/7</a
    >
    <a
        class="h-7 w-7 rounded-full bg-black flex items-center justify-center"
        href="tel:+79088002187"
        ><img class="w-[50%]" src="/svg/phone-call-01.svg " alt="" /></a
    >
</div>
