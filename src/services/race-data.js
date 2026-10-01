export const raceData = {
    event: {
        title: 'Carrera CPM 75 años',
        date: '04 de octubre de 2026',
        dateShort: '04.10.26',
        location: 'Alameda de León, Oaxaca de Juárez',
        address: 'Av. Independencia S/N a un costado de la Alameda de León',
        start: '7:00 AM',
        capacity: '1,300 corredores',
        distances: ['5K', '10K'],
    },
    benefits: [
        { icon: 'shirt', label: 'Playera', detail: 'Conmemorativa del evento' },
        { icon: 'hash', label: 'Número', detail: 'Identificación del corredor' },
        { icon: 'timer', label: 'Chip', detail: 'Cronometraje electrónico' },
        { icon: 'medal', label: 'Medalla', detail: 'Por completar tu reto' },
        { icon: 'file-check-2', label: 'Certificado', detail: 'Digital de participación' },
        { icon: 'droplets', label: 'Hidratación', detail: 'Durante la ruta' },
    ],
    prizes: [
        { distance: '10K', first: '$4,000', second: '$2,000', third: '$1,000' },
        { distance: '5K', first: '$2,000', second: '$1,000', third: '$500' },
    ],
    faqs: [
        ['¿Quiénes pueden participar?', 'Socios y personas que cumplan con las bases y mecánica de inscripción. La carrera es para mayores de edad.'],
        ['¿Cómo obtengo mi folio?', 'Acude a una sucursal participante, cumple con las bases y solicita tu folio al gerente o subgerente.'],
        ['¿Qué distancias existen?', 'Puedes elegir entre 5K y 10K, en categoría libre femenil o varonil.'],
        ['¿Dónde recojo mi kit?', 'En las oficinas de Plaza Oaxaca, Calle Armenta y López No. 1028, Planta Alta, Centro, Oaxaca de Juárez.'],
        ['¿Qué incluye el kit?', 'Playera conmemorativa, número de corredor, chip para cronometraje y la información del evento.'],
    ],
};

export const registrationSteps = [
    ['01', 'Cumple las bases', 'Realiza tu ahorro, crédito o pago de inscripción según corresponda.'],
    ['02', 'Obtén tu folio', 'Registra tu participación en una sucursal participante de CPM.'],
    ['03', 'Regístrate y corre', 'Completa tu inscripción, recoge tu kit y prepárate para la salida.'],
];
