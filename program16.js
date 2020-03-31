const getDependencias = (mod, resultado) => {
  resultado = resultado || [];
  
  const dependencias = mod && mod.dependencies || [];
  Object.keys(dependencias).forEach((dep) => {
    const key = dep + '@' + mod.dependencies[dep].version;
    if (resultado.indexOf(key) === -1) resultado.push(key)
    getDependencias(mod.dependencies[dep], resultado);
  });

  return resultado.sort();
};

module.exports = getDependencias;
