<script lang="ts">
    import { page } from "$app/stores";
</script>

<div
    class=" bg-white sm:px-16 p-4 h-[70vh] flex flex-col items-center justify-center"
>
    <h1 class="text-6xl mb-4">{$page.status}: {$page.error?.message}</h1>
    <a href="/">Назад</a>
</div>
