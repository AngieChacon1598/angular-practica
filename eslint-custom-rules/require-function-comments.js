module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Requiere comentarios en funciones exportadas.",
    },
    messages: {
      missingComment: "Agrega un comentario explicativo a esta función exportada.",
    },
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getCommentsBefore(node);
        if (
          node.parent.type === "ExportNamedDeclaration" &&
          comments.length === 0
        ) {
          context.report({ node, messageId: "missingComment" });
        }
      },
    };
  },
};
