module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Limita los archivos a un máximo de 300 líneas.",
    },
    messages: {
      tooLong: "Este archivo tiene más de 300 líneas ({{count}}).",
    },
  },
  create(context) {
    return {
      Program(node) {
        const lineCount = context.getSourceCode().lines.length;
        if (lineCount > 300) {
          context.report({
            node,
            messageId: "tooLong",
            data: { count: lineCount },
          });
        }
      },
    };
  },
};
