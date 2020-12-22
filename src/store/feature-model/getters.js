import optionalNodeIcon from 'assets/o.png';
import mandatoryNodeIcon from 'assets/m.png';
import orNodeIcon from 'assets/or.png';
import xorNodeIcon from 'assets/xor.png';

function getNodeIcon(node) {
  if (node.type === 'o') {
    return optionalNodeIcon;
  } if (node.type === 'm') {
    return mandatoryNodeIcon;
  } if (node.type === 'g') {
    if (node.multiplicity === '1,1') {
      return xorNodeIcon;
    } if (node.multiplicity === '1,*') {
      return orNodeIcon;
    }
  }

  return undefined;
}

function setNodeIcon(node) {
  return {
    ...node,
    img: getNodeIcon(node),
    children: node.children.map((item) => setNodeIcon(item)),
  };
}

export function featureModels(state) {
  return state.featureModels;
}

export function featureModel(state) {
  return state.featureModel;
}

export function featureTree(state) {
  const [root] = state.featureModel.featureTree;

  return [setNodeIcon(root)];
}
