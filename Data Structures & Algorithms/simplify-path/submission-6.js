class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let finalStr = [];

        path = path.split("/");
        console.log(path);

        for(let part of path) {
            if(part == "" || part == ".") continue;
            if(part !== "..") {
                finalStr.push(part);
            } else {
                if(finalStr.length > 0) {
                    finalStr.pop();
                }
            }
        }

        return "/"+finalStr.join("/");
    }
}
