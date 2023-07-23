<script lang="ts">
    import { getContext, setContext } from "svelte";

    const items = [
        { text: "Главная", href: "/" },
        { text: "Главная", href: "/" },
        { text: "Главная", href: "/" },
    ];
</script>

<div
    class="flex justify-between items-center border-t border-gray-100 w-full pt-10 pb-6"
>
    <a class=" shrink-0" href="/"><slot name="logotype" /> </a>
    <a class="sm:flex hidden font-medium" href="">+7 (908) 119-72-79 | 24/7</a>
</div>
