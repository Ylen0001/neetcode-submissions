class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1; // Vitesse minimale
        let mid = 0;
        let right = Math.max(...piles); // Vitesse maximale déterminée par le max de piles
        let res = 0;
        while(left <= right){
            mid = Math.floor((right + left) / 2); // Ici, plutôt qu'un index, on veut une vitesse moyenne
            let hours = 0; 
            for(const pile of piles){
                hours += Math.ceil(pile / mid);
            }
            if(hours <= h){
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}

/* piles ---> tas de bananes, h --> Nombre d'heure pour manger toutes les bananes.
return k, soit le nombre minimum de bananes par heure qu'il faut manger pour vider la pile 
avant le temps écoulé.

Twist : Si jamais la pile a moins de K bananes restantes, on peut finir la pile, mais on ne
peut pas en attaquer une nouvelle dans la même heure. Ce twist se traduit en code par :
Math.ceil(). On garde le plus grand entier supérieur = L'heure est consommé même si uniquement une
banane restait dans la pile. 

En bref, on va tester des vitesses potentielle et garder la plus petite fonctionnelle*/