export const loginUser = {
  "email": "admin@admin.com",
  "password": "secret_admin"
}

export const dedodedToken = {
  "email": "admin@admin.com",
  "id": 1,
  "username": "Admin",
  "role": "admin",
  "iat": 1669812223
};

export const loginMockResponse = {
  dataValues: {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  }
}

export const teamsMockResponse =
  [
    {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "teamName": "Bahia"
    },
    {
      "id": 3,
      "teamName": "Botafogo"
    }
  ]

export const oneTeamMockResponse =
  [
    {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
  ]

export const matchesMockResponse = [
  {
    "id": 1,
    "homeTeam": 16,
    "awayTeam": 8,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "awayTeam": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "awayTeam": 11,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  }
]

export const matchesInProgressMock = [
  {
    "id": 47,
    "homeTeam": 8,
    "awayTeam": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "awayTeam": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 49,
    "homeTeam": 16,
    "awayTeam": 4,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Corinthians"
    }
  }
]

export const insertMatchesMock = {
  "homeTeam": 16,
  "awayTeam": 4,
  "homeTeamGoals": 1,
  "awayTeamGoals": 2
}

export const insertMatchesMockResponse = {
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true
}