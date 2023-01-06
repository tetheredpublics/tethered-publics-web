<script>
  import { page } from '$app/stores';
</script>

<div class="section">
    <div class="container">
        <h1 style="text-align: center;">{$page.status}: {$page.error.message} 🥴</h1>
    </div>
</div>

