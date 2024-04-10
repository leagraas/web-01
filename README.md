# web-01
TP QUESTIONS
1.	`npm install` command also generated a package-lock.json file along with package.json. What is the purpose of this file?
      
NPM génère un package-lock.json dans le but de prévenir les incohérences liées aux versions des dépendances. Si quelqu’un exécute « npm install » ultérieurement et qu’une dépendance a été mise à jour entre-temps dans la plage, cela pourrait entraîner des problèmes.
      
Package-lock.json est comme une version détaillée de package.json. Il énumère les dépendances transitives (c’est-à-dire les dépendances de nos dépendances) et fixant les versions exactes des dépendances installées. Cela contribue à éviter les problèmes de compatibilité ou de divergence entre les versions des dépendances, assurant ainsi la stabilité et la cohérence du projet.
      
En plus du package-lock.json, NPM crée également un dossier node_modules, où toutes les dépendances indiquées dans le package.json sont téléchargées.

2.	By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this?

Il s’agit du format de versionnement sémantique également connu sous le nom de « semantic versioning » en anglais. Il se compose en trois parties chifrées, séparées par des points : major.minor.patch. Chacune de ces parties représente différents types de modifications apportées au logiciel, et elles sont utilisées pour aider les développeurs et les utilisateurs à comprendre la signification d’un numéro de version donné.

3.	What is a devDependency exactly? What are the differences with a dependency?

Une devDependency est une dépendance nécessaire pour le développement et les tests d’un projet logiciel, mais qui n’est pas nécessaire pour la production.
     
Ces dépendances sont généralement listées dans le fichier package.json d’un projet Nodes.js. Elles incluent souvent des outils de développement qui sont utilisés durant la phase de développement mais pas lors de l’exécution du code de production.
      
La différence principale entre les deux c’est que les dependencies sont nécessaire pour que le projet fonctionne, tandis que la devDependency ne sont utilisés que lors des tests et du développement.
4.	What is a closure/iife ? What was it used for ? What replaced it?

IIFE vient de Immediatly Invoked Function Expression qui est une fonction JavaScript qui est immédiatement exécutée dès sa déclaration. Elle était souvent utilisé avant les module ES pour définir des scopes privés. Avec l’introduction des modules ES (ECMAScript), les variables et les fonctions définies dans un module sont par défaut locales au module, sauf si elles sont explicitement exportées pour être utilisées ailleurs.
5.	What is the difference between import * as toto from './utils' and import { parseUrl } from './utils'? What can be the consequences of using one instead of the other?

Import * as toto from ‘./utils’ importe tous les fichiers exportés du module ‘./utils’ sous le namespace ‘toto’ alors que import { parseUrl } from ‘./utils’ importe uniquement la fonction « parseUrl » du module ‘./utils’.

Il est préférable d’utiliser l’import {parseUrl} from ‘./utils’ lorsque seule une partie spécifique du module est nécessaire, car cela réduit le risque de conflit avec d’autres variables ou fonctions importées. L’import * from ‘./utils’ peut entraîner des conflits potentiels si plusieurs variables ou fonctions avec des noms similaires sont exportées dans le module. Dans le cas d’un conflit, les valeurs des variables peuvent se mélanger et risquer de ne plus correspondre à ce qu’on souhaitait.

Dans notre projet, sachant que le module ‘./utils’ ne contient que la fonction parseUrl, il n’y a pas grand intérêt à importer sous la forme « import * as toto from ‘./utils’ ». Cela revient à renommer la fonction, ce qui peut entraîner une confusion inutile et augmenter les risques dans le cas où on aurait besoin d’ajouter de nouvelle information dans le module ‘./utils’
6.	Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?
      
L’utilisation d’interfaces et la surcharge de méthodes ou de constructeurs sont deux choses possibles avec les classes Java mais qui ne peuvent pas être réalisées avec les classes ES6.

En java, les interfaces peuvent être utilisées, ce qui n’est pas possible avec les classes ES6.

De plus, en java, il est possible de surcharger des méthodes ou des constructeurs tandis que les classes ES6 ne supporte pas du tout la surcharge.
7.	What are the differences between var and let;

La grande différence entre ‘var’ et ‘let’ réside dans la portée des variables. Une variable définie avec ‘var’ est accessible à l’intérieur de la fonction dans laquelle elle est déclarée, ainsi que dans les fonctions (ou if/else…) imbriquées. De plus, si elle est définie en dehors d’une fonction, elle a une portée globale dans le contexte où elle est définie. En revanche, ‘let’ a une portée de bloc, ce qui signifie que la variable est définie uniquement à l’intérieur du bloc dans lequel elle est déclarée, que ce soit une fonction, une boucle ‘for’ ou une structure conditionnelle ‘if/else’.
8.	What is the .bind(this) stuff? What happens if you delete it? Is it needed when using an arrow function ? why ?

La méthode ‘.bind(this)’ en JavaScript est une technique utilisée pour attacher explicitement le contexte d’exécution (‘this’) à une fonction.
      
Si cette méthode est supprimée, la fonction risque d’avoir un objet différent de celui prévu, ce qui peut entraîner des erreurs potentielles.
      
L’utilisation de ‘.bind(this)’ n’est pas nécessaire avec les fonctions fléchées car elles héritent automatiquement du contexte ‘this’ de la portée parente dans laquelle elles sont définies.
9.	What does the @ symbol mean in @babel/***?

Le symbole ‘@’ indique un espace de noms dans le système de gestion de paquets JavaScript. Dans le contexte de Babel, ‘@babel/’ signifie que le package ou le module appartient à l’espace de nom ‘@babel’, ce qui permet de distinguer les fonctionnalités de Babel des autres modules ou packages JavaScript.
10.	What are the advantages of Promises?

Les avantages des promesses sont les suivants :
       
Elles sont souvent utilisées pour gérer des opérations asynchrones en JavaScript.

Elles sont immuables, ce qui signifie qu’une fois qu’elles sont résolues ou rejetées, elle ne peut plus être modifiées.

Les promesses fournissent une syntaxe plus claire et plus structurée pour gérer à la fois les cas de succès et d’erreur lors de l’exécution d’opérations asynchrones.

11.	What version of ECMAScript async / await was released in ?
       
ES8 (ESMAScript 2017)
12.	Component-oriented programming for the web is considered more maintainable. Why?
       
Avec la programmation orientée composant, les pages web et leurs fonctionnalités sont encapsulées dans des composants réutilisables. Cette approche favorise une meilleure séparation des préoccupations en regroupant le code lié à une fonctionnalité spécifique dans un composant distinct, plutôt que de le disperser à travers toute l’application. Cela simplifie la structure du code et facilite sa maintenance.

De plus, les composants réutilisables peuvent être facilement mis à jour et modifiés sans affecter d’autres parties de l’application, ce qui améliore la maintenabilité du code à long terme.
13.	What is Functional programming?
       
La programmation fonctionnelle met l'accent sur l'utilisation de fonctions comme éléments centraux du code. Ce style de programmation favorise l'écriture de fonctions produisant des résultats constants pour des entrées données, sans effets secondaires. Cela garantit la prédictibilité, la clarté et la facilité de test du code. De plus, ce paradigme permet la transmission de fonctions en tant qu'arguments ou leur utilisation comme résultats d'autres fonctions, favorisant ainsi la composition et la réutilisabilité du code.
14.	Explain what the map() function does ?
       
La fonction map() est utilisée avec des tableaux en JavaScript. Elle parcourt chaque élément du tableau et applique une fonction spécifiée par l’utilisateur à chaque élément. Ensuite, elle renvoie un nouveau tableau contenant les résultats de l’application de cette fonction à chaque élément d’origine du tableau.
15.	Explain what the filter() function does ?
       
La fonction filter() est également utilisée avec des tableaux JavaScript. Elle parcourt chaque élément du tableau et applique un test spécifié par l’utilisateur à chacun d’eux. Ensuite, elle renvoie un nouveau tableau contenant uniquement les éléments qui ont réussi le test. Les conditions du test à effectuer sur chaque élément sont définies par l’utilisateur en tant qu’ argument de la fonction filter().
16.	Explain what the reduce() function does ?
       
La fonction reduce() est également utilisée avec des tableaux JavaScript. Elle parcourt chaque élément du tableau et effectue une réduction en accumulant les valeurs des éléments du tableau. L’accumulateur, ou la valeur initiale, est fourni en argument à la fonction reduce(). A chaque itération, la fonction de rappel fournie est appliquée à l’accumulateur et à l’élément en cours, produisant ainsi une valeur accumulée. Le résultat final est la valeur accumulée après avoir accumulé tous les éléments du tableau, ce qui donne est une valeur unique en sortie.
17.	What is the difference between .then() and async/await when handling asynchronous functions?
       
La différence entre ‘async/await’ et ‘.then()’ réside dans la manière dont ils gèrent l’attente des opérations asynchrones.

Avec ‘async/await’, le code suivant la fonction ‘wait’ ne sera exécuté qu’après que l’opération asynchrone ait été complétée, bloquand ainsi l’exécution du code suivant jusqu’à ce que la promesse soit résolue ou rejetée.

Avec ‘.then ()’, le code à l’intérieur de la méthode ‘.then()’ est exécuté lorsque la pormesse est résolue, mais cela n’empêche pas l’exécution du code suivant dans le flux d’exécution principal. Ainsi, le reste du code peut continuer à s’exécuter pendant la promesse en cours de résolution.
18.	What does the _ prefix mean on a sass file?
       
Le préfixe _ dans les noms de fichiers Sass est une convention qui indique que ces fichiers sont destinés à être importés dans d’autres fichiers Sass, plutôt que d’être compilés individuellement. Ces fichiers sont appelés des « partiels » et sont conçus pour être inclus dans d’autres fichier Sass à l’aide d’importation mais ils ne seront pas compilés directement.
