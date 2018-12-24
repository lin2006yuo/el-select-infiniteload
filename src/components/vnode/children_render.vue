<script>
export default {
  functional: true,
  render(createElement, context) {
    console.log({ context: context.parent.$options.components });
    return createElement("h3", "children_render");
  }
};
</script>

<style>
</style>
