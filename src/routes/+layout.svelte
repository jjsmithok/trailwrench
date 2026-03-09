<script lang="ts">
  import '../app.css';
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #1a1a1a;
    color: #fafafa;
    min-height: 100vh;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
