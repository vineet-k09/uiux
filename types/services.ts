export interface UseCase {
  title: string
  problem: string
  solution: string
  impact: string
}

export interface Service {
  id: string
  name: string
  description: string
  use_cases: UseCase[]
}

export interface Domain {
  id: string
  name: string
  description: string
  services: Service[]
}