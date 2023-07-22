<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class=" bg-white sm:px-16 p-4 h-screen">
    <h1 class="text-5xl">{$page.status}: {$page.error?.message}</h1>
</div>
