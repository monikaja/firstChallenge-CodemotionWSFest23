export const DNAtoRNA = (value: string): string => {
    if (!value) {
        return '';
    }

    const initialString: string = value.toUpperCase().replace(/\s/, '');
    const chars: string [] = initialString.split('');
    return chars.map((letter) => translateChar(letter)).join('');
};

const translateChar = function (letter: string) {

    switch (letter) {
        case 'G':
            return 'C';
        case 'C':
            return 'G'
        case 'T':
            return 'A';
        case 'A':
            return 'U';
        default:
            // logger error
            return '';
    }
}
DNAtoRNA("GCGTACCTAGGGAACTAGGAGGATTACCCCACGTAATTTACCGACCAGGACTAGCTAAACTGGATAGCTATTAAAATTATTCGATGGGCATGGAACTAGGAGGCTATTAGACCTAGCTATGGTAGTAGTGGATAGCTAGCTATGCCCACGTAATTTACGGAACTAGGAGGCTATGCTATTAAAATTAGCTATTAAAATTATTCTAGCTATTAAGGATA");
