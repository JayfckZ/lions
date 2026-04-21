import { useState } from 'react'
import * as S from './catalogoStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CARROS = [
  {
    id: 1,
    nome: 'RENAULT LOGAN LIFE 10MT',
    km: 95163,
    anoFab: 2022,
    anoMod: 2023,
    cor: 'Branca',
    combustivel: 'Flex',
    carroceria: 'Sedan',
    marca: 'Renault',
    imagem: 'https://dmmfmlu2mykln.cloudfront.net/veiculos/7C8A2445393046B6822ACFF3463F80FC/82de5d1071db4d8c8dfcfd701541e412_FrentePlaqueta.webp'
  },
  {
    id: 2,
    nome: 'VOLKSWAGEN GOL MPI',
    km: 31750,
    anoFab: 2022,
    anoMod: 2023,
    cor: 'Branca',
    combustivel: 'Flex',
    carroceria: 'Hatch',
    marca: 'Volkswagen',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F0C945E6F020942EFA9B37CC616886911%2Ff5d518c66fd6467f8d9987aed7b12abc_FrentePlaqueta.webp?width=600'
  },
  {
    id: 3,
    nome: 'NISSAN KICKS ACTIVE CVT',
    km: 37065,
    anoFab: 2023,
    anoMod: 2024,
    cor: 'Branca',
    combustivel: 'Flex',
    carroceria: 'SUV',
    marca: 'Nissan',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2FF562A08B0939407D9BC73D49034239C7%2Fdc5b87b4dcbf47f28d38e464876dd518_FrentePlaqueta.webp?width=600'
  },
  {
    id: 4,
    nome: 'PEUGEOT 208 LIKE MT',
    km: 96386,
    anoFab: 2023,
    anoMod: 2024,
    cor: 'Preta',
    combustivel: 'Flex',
    carroceria: 'Hatch',
    marca: 'Peugeot',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F6423A938661040A6A49A016F5BF33D25%2F6153f4d2e49f4546a300a4452ee7ed60_FrentePlaqueta.webp?width=600'
  },
  {
    id: 5,
    nome: 'VOLKSWAGEN NIVUS CL TSI',
    km: 45438,
    anoFab: 2023,
    anoMod: 2024,
    cor: 'Preta',
    combustivel: 'Gasolina',
    carroceria: 'SUV',
    marca: 'Volkswagen',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2FFD5E0D880D004A7DB55E93DB9A01B017%2F8dc5fd5039fa497883746ad78bc1233e_FrentePlaqueta.webp?width=600'
  },
  {
    id: 6,
    nome: 'MITSUBISHI OUTLANDER 3.0 HPES',
    km: 132036,
    anoFab: 2019,
    anoMod: 2020,
    cor: 'Marrom',
    combustivel: 'Gasolina',
    carroceria: 'SUV',
    marca: 'Mitsubishi',
    imagem: 'https://dmmfmlu2mykln.cloudfront.net/veiculos/0DC939C3577E49F7A90B9158E0C428BC/f1f275aeafed4a31bd8393ab1a19e459_FrentePlaqueta.webp'
  },
  {
    id: 7,
    nome: 'HONDA CIVIC EXL CVT',
    km: 28400,
    anoFab: 2022,
    anoMod: 2023,
    cor: 'Preta',
    combustivel: 'Flex',
    carroceria: 'Sedan',
    marca: 'Honda',
    imagem: 'https://placehold.co/600x400/1a1a1a/ffffff?text=CIVIC'
  },
  {
    id: 8,
    nome: 'CHEVROLET ONIX PLUS LT',
    km: 41200,
    anoFab: 2022,
    anoMod: 2023,
    cor: 'Branca',
    combustivel: 'Flex',
    carroceria: 'Sedan',
    marca: 'Chevrolet',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2FB422387D5300407B92552BADB00FA45D%2Fd9d570bfd91f484b8ca6d443a89e3cc6_FrentePlaqueta.webp?width=600'
  },
  {
    id: 9,
    nome: 'TOYOTA COROLLA XEI',
    km: 52100,
    anoFab: 2021,
    anoMod: 2022,
    cor: 'Prata',
    combustivel: 'Flex',
    carroceria: 'Sedan',
    marca: 'Toyota',
    imagem: 'https://imagecdn.app/v2/image/https%3A%2F%2Fdmmfmlu2mykln.cloudfront.net%2Fveiculos%2F7C9C332AAEBD431B96DA11009A83B8CF%2F3949d1b41886483f855be278a62a51a7_FrentePlaqueta.webp?width=600'
  }
]

const MARCAS = ['Todas', ...Array.from(new Set(CARROS.map((c) => c.marca)))]
const CORES = ['Todas', ...Array.from(new Set(CARROS.map((c) => c.cor)))]
const COMBUSTIVEIS = [
  'Todos',
  ...Array.from(new Set(CARROS.map((c) => c.combustivel)))
]
const CARROCERIAS = [
  'Todas',
  'Hatch',
  'Sedan',
  'SUV',
  'Picape',
  'Moto',
  'Utilitário'
]

const ITEMS_PER_PAGE = 6

const Catalago = () => {
  const [busca, setBusca] = useState('')
  const [marca, setMarca] = useState('Todas')
  const [cor, setCor] = useState('Todas')
  const [combustivel, setCombustivel] = useState('Todos')
  const [anoMin, setAnoMin] = useState(2010)
  const [carrocerias, setCarrocerias] = useState<string[]>([])
  const [ordenar, setOrdenar] = useState('relevancia')
  const [pagina, setPagina] = useState(1)

  const toggleCarroceria = (c: string) => {
    setCarrocerias((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    )
    setPagina(1)
  }

  const resetFiltros = () => {
    setBusca('')
    setMarca('Todas')
    setCor('Todas')
    setCombustivel('Todos')
    setAnoMin(2010)
    setCarrocerias([])
    setOrdenar('relevancia')
    setPagina(1)
  }

  let filtrados = CARROS.filter((c) => {
    if (busca && !c.nome.toLowerCase().includes(busca.toLowerCase()))
      return false
    if (marca !== 'Todas' && c.marca !== marca) return false
    if (cor !== 'Todas' && c.cor !== cor) return false
    if (combustivel !== 'Todos' && c.combustivel !== combustivel) return false
    if (c.anoMod < anoMin) return false
    if (carrocerias.length > 0 && !carrocerias.includes(c.carroceria))
      return false
    return true
  })

  if (ordenar === 'menor-km')
    filtrados = [...filtrados].sort((a, b) => a.km - b.km)
  if (ordenar === 'mais-novo')
    filtrados = [...filtrados].sort((a, b) => b.anoMod - a.anoMod)

  const totalPages = Math.ceil(filtrados.length / ITEMS_PER_PAGE)
  const paginados = filtrados.slice(
    (pagina - 1) * ITEMS_PER_PAGE,
    pagina * ITEMS_PER_PAGE
  )

  return (
    <>
      <S.PageWrapper>

        <Header />

        <S.Hero>
          <div>
            <S.HeroTitle>
              Nosso
              <br />
              <span>Estoque</span>
            </S.HeroTitle>
            <S.HeroSub>{filtrados.length} veículos disponíveis</S.HeroSub>
          </div>
          <S.SearchBox>
            <i className="bi bi-search" />
            <input
              placeholder="Buscar modelo, marca..."
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value)
                setPagina(1)
              }}
            />
          </S.SearchBox>
        </S.Hero>

        <S.ContentArea>
          <S.Sidebar>
            <S.FilterGroup>
              <S.FilterLabel>Marca</S.FilterLabel>
              <S.Select
                value={marca}
                onChange={(e) => {
                  setMarca(e.target.value)
                  setPagina(1)
                }}
              >
                {MARCAS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.FilterLabel>Cor</S.FilterLabel>
              <S.Select
                value={cor}
                onChange={(e) => {
                  setCor(e.target.value)
                  setPagina(1)
                }}
              >
                {CORES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.FilterLabel>Combustível</S.FilterLabel>
              <S.Select
                value={combustivel}
                onChange={(e) => {
                  setCombustivel(e.target.value)
                  setPagina(1)
                }}
              >
                {COMBUSTIVEIS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.FilterLabel>
                Ano modelo —{' '}
                <strong style={{ color: '#fff' }}>a partir de {anoMin}</strong>
              </S.FilterLabel>
              <S.RangeWrapper>
                <input
                  type="range"
                  min={2010}
                  max={2025}
                  value={anoMin}
                  onChange={(e) => {
                    setAnoMin(Number(e.target.value))
                    setPagina(1)
                  }}
                />
                <div className="range-labels">
                  <span>2010</span>
                  <span>2025</span>
                </div>
              </S.RangeWrapper>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.FilterLabel>Carroceria</S.FilterLabel>
              <S.CheckboxGroup>
                {CARROCERIAS.filter((c) => c !== 'Todas').map((c) => (
                  <label key={c}>
                    <input
                      type="checkbox"
                      checked={carrocerias.includes(c)}
                      onChange={() => toggleCarroceria(c)}
                    />
                    {c}
                  </label>
                ))}
              </S.CheckboxGroup>
            </S.FilterGroup>

            <S.ResetBtn onClick={resetFiltros}>Limpar filtros</S.ResetBtn>
          </S.Sidebar>

          <S.GridArea>
            <S.GridHeader>
              <S.ResultCount>
                Exibindo <strong>{paginados.length}</strong> de{' '}
                <strong>{filtrados.length}</strong> veículos
              </S.ResultCount>
              <S.SortSelect
                value={ordenar}
                onChange={(e) => {
                  setOrdenar(e.target.value)
                  setPagina(1)
                }}
              >
                <option value="relevancia">Relevância</option>
                <option value="menor-km">Menor km</option>
                <option value="mais-novo">Mais novo</option>
              </S.SortSelect>
            </S.GridHeader>

            <S.CarGrid>
              {paginados.map((carro) => (
                <S.CarCard key={carro.id}>
                  <S.CardImg src={carro.imagem}>
                    <S.CardBadge>Seminovo</S.CardBadge>
                  </S.CardImg>
                  <S.CardBody>
                    <S.CardTitle>{carro.nome}</S.CardTitle>
                    <S.CardMeta>
                      <span>{carro.km.toLocaleString('pt-BR')} km</span>
                      <span>
                        {carro.anoFab}/{carro.anoMod}
                      </span>
                      <span>{carro.cor}</span>
                    </S.CardMeta>
                    <S.CardActions>
                      <S.BtnSimular>SIMULAR</S.BtnSimular>
                      <S.BtnChat>Falar com atendente</S.BtnChat>
                    </S.CardActions>
                  </S.CardBody>
                </S.CarCard>
              ))}
            </S.CarGrid>

            {totalPages > 1 && (
              <S.Pagination>
                <S.PageBtn
                  onClick={() => setPagina((p) => Math.max(1, p - 1))}
                  disabled={pagina === 1}
                >
                  <i className="bi bi-chevron-left" style={{ fontSize: 12 }} />
                </S.PageBtn>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <S.PageBtn
                      key={n}
                      $active={pagina === n}
                      onClick={() => setPagina(n)}
                    >
                      {n}
                    </S.PageBtn>
                  )
                )}
                <S.PageBtn
                  onClick={() => setPagina((p) => Math.min(totalPages, p + 1))}
                  disabled={pagina === totalPages}
                >
                  <i className="bi bi-chevron-right" style={{ fontSize: 12 }} />
                </S.PageBtn>
              </S.Pagination>
            )}
          </S.GridArea>
        </S.ContentArea>

        <Footer />
      </S.PageWrapper>
    </>
  )
}
export default Catalago
