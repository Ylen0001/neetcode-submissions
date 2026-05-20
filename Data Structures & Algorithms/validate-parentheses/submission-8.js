class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        const stack = [];
        for(let i = 0; i < s.length; i++){
            
            if(s[i] === '[' || s[i] === '{' || s[i] === '(')
                stack.push(s[i]); // On met le caractère dans la stack
            else if(stack.pop() !== pairs[s[i]])
                return false
        }
        return stack.length === 0;
    }
}



/* On veut avancer à travers la stack. Dés qu'on croise un caractère on le push
et à chaque fois, on verifie si le dernier élément de la stack a sa fermante dans pairs. SI c'est le cas
on pop(), sinon on avance. 
Si la length finale de la stack n'est pas zero, on return false. */
