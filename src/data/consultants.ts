export const consultantsData: {
    id: string;
    firstName: string;
    lastName: string;
    status: 'active' | 'sick' | 'pending_sick';
    isBooked: boolean;
  }[] = [
    {
      id: '1',
      firstName: 'Johan',
      lastName: 'Hell',
      status: 'sick',
      isBooked: true
    },
    {
      id: '2',
      firstName: 'Maria',
      lastName: 'Andersson',
      status: 'active',
      isBooked: true
    },
    {
      id: '3',
      firstName: 'Erik',
      lastName: 'Svensson',
      status: 'pending_sick',
      isBooked: true
    },
    {
      id: '4',
      firstName: 'Anna',
      lastName: 'Lindberg',
      status: 'sick',
      isBooked: false
    }
  ] as const;
