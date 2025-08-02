module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Evita el uso de console.log en producción.",
    },
    messages: {
      noConsole: "Evita el uso de console.log.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee?.object?.name === "console" &&
          node.callee?.property?.name === "log"
        ) {
          context.report({ node, messageId: "noConsole" });
        }
      },
    };
  },
};
