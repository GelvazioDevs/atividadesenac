CREATE TABLE public.usuario (
	usucodigo serial4 NOT NULL,
	usunome varchar(50) NOT NULL,
	usulogin varchar(60) NULL,
	ususenha varchar(20) NULL,
	usuemail varchar(60) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (usucodigo)
);
CREATE UNIQUE INDEX si_usulogin ON public.usuario USING btree (usulogin);

-- Tabela usuario alunos Senac
CREATE TABLE public.usuario (
	usucodigo serial4 NOT NULL,
	usunome varchar(50) NOT NULL,
	usulogin varchar(60) NULL,
	usuemail varchar(60) NULL,
	ususenha varchar(20) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (usucodigo)
);
CREATE UNIQUE INDEX si_usulogin ON public.usuario USING btree (usulogin);

--Nova senha banco dados supabase:76acgzTtXQpSPRUw

--tabela de exercicios


CREATE TABLE public.exercicios (
	codigo serial4 NOT NULL,
	descricao varchar(50) NOT NULL,
	dataexercicio varchar(10),
	CONSTRAINT exercicio_pkey PRIMARY KEY (codigo)
);

--insert exercicios
INSERT INTO public.exercicios
(codigo, descricao, dataexercicio)
VALUES(nextval('exercicios_codigo_seq'::regclass), 'EXERCICIOS SEQUENCIAIS', '26032024');

-- ligacao de exercicio com aluno
CREATE TABLE public.exercicioaluno (
	usucodigo int NOT NULL,
	codigoatividade int NOT NULL,
	codigoexercicio int NOT NULL,
	statuscorrecao varchar(50) NOT NULL,  --(PENDENTE, CORRIGIDO)
	exerciciofeito varchar(50) NOT NULL,  --(SIM, NAO)
	exerciciorodando varchar(50) NOT NULL,--(SIM, NAO)
	exerciciocorreto varchar(50) NOT NULL,--(SIM, NAO)
	CONSTRAINT exercicioaluno_pkey PRIMARY KEY (codigoatividade, usucodigo, codigoexercicio)
);

CREATE TABLE public.githubaluno (
	usucodigo int NOT NULL,
	statusgithub varchar(50) NOT NULL,   --(CRIADO, PENDENTE)
	pastajavagithub varchar(50) NOT NULL,--(CRIADO, PENDENTE)-PASTA DE NOME ProjetoJava
	pastaphpgithub varchar(50) NOT NULL, --(CRIADO, PENDENTE)-PASTA DE NOME ProjetoPHP
	pastahtmlgithub varchar(50) NOT NULL,--(CRIADO, PENDENTE)-PASTA DE NOME ProjetosHTML
	CONSTRAINT githubaluno_pkey PRIMARY KEY (usucodigo)
);

-- atividade
CREATE TABLE public.atividade (
	codigo serial4 NOT NULL,
	descricao varchar(50) NOT NULL,
	dataatividade varchar(10),
	CONSTRAINT atividade_pkey PRIMARY KEY (codigo)
);
alter table exercicios add column codigoatividade int not null default 1;

-- Sessions
CREATE TABLE public.session_usuario (
	id uuid NOT NULL,
	usucodigo int NOT NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,

	CONSTRAINT session_usuario_pkey PRIMARY KEY (id),
	CONSTRAINT session_usucodigo_fkey FOREIGN KEY (usucodigo) REFERENCES public.usuario(usucodigo) ON DELETE CASCADE
);
