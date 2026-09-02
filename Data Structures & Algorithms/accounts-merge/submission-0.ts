
class UnionFind {
    parent: Map<string, string> = new Map();
    find(i: string): string {
        if (!this.parent.has(i)) this.parent.set(i, i);
        if (this.parent.get(i) === i) return i;
        this.parent.set(i, this.find(this.parent.get(i)!));
        return this.parent.get(i)!;
    }
    union(i: string, j: string): void {
        const rootI = this.find(i);
        const rootJ = this.find(j);
        if (rootI !== rootJ) this.parent.set(rootI, rootJ);
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts: string[][]): string[][] {
        const uf = new UnionFind();
  const emailToName = new Map<string, string>();
        for (const acc of accounts) {
            const name = acc[0];
            const firstEmail = acc[1];
            for (let i = 1; i < acc.length; i++) {
                const email = acc[i];
                uf.union(firstEmail, email);
                emailToName.set(email, name);
            }
        }

        const components = new Map<string, string[]>();
        for (const email of emailToName.keys()) {
            const root = uf.find(email);
            if (!components.has(root)) {
                components.set(root, []);
            }
            components.get(root)!.push(email);
        }
        const mergedAccounts: string[][] = [];
        for (const [root, emails] of components.entries()) {
            mergedAccounts.push([
                emailToName.get(root)!,
                ...emails.sort()
            ]);
        }
        return mergedAccounts;
    }

}
