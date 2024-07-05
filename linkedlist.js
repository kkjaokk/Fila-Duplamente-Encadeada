class No{

    constructor (novoDado){

        this.dado = novoDado;
        this.ant = null;
        this.prox = null;

    }

}

//-------------------------------------------

class LinkedList{

    constructor(){

        this.head = null;
        this.tail = null;
        this.lenght = 0;

    }

    addFirst(novoDado){

        const novoNo = new No(novoDado);
        if(novoNo === null) // dois "=" verificam o valor lireal dos dados, e tres "=" comparam o tipo de dado.
        return false; 

        if(this.head === null)
            this.tail = novoNo;

        else{

            novoNo.prox = this.head;
            this.head.ant = novoNo;

        }
        
        this.head = novoNo;
        this.lenght++;
        return true;

    }

    addLast(novoDado){

        const novoNo = new No(novoDado);
        if(novoNo === null) // dois "=" verificam o valor lireal dos dados, e tres "=" comparam o tipo de dado.
        return false; 

        if(this.head === null)
            this.head = novoNo;

        else{

            novoNo.ant = this.tail;
            this.tail.prox = novoNo;

        }
        
        this.tail = novoNo;
        this.lenght++;
        return true;

    }

    removeFirst(){

        // salvar dado a ser removido para retornar
        // head = head.prox
        // se for o ultimo elemento, fazer tail = null 
        // se nao head.ant = null
        // decrementar lenght
        // retornar elemento


    }

}