export type TreeNode = { children?: TreeNode[] };

export function countNodes(nodes: TreeNode[]): number {
  let n = 0;
  for (const nd of nodes) { n += 1; if (nd.children?.length) n += countNodes(nd.children); }
  return n;
}
