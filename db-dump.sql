--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: gestion-estudiantes; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "gestion-estudiantes" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE "gestion-estudiantes" OWNER TO postgres;

\connect -reuse-previous=on "dbname='gestion-estudiantes'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: asignatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asignatura (
    id integer NOT NULL,
    nombre character varying(255),
    id_carrera integer
);


ALTER TABLE public.asignatura OWNER TO postgres;

--
-- Name: asignatura_id_seq1; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.asignatura_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.asignatura_id_seq1 OWNER TO postgres;

--
-- Name: asignatura_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.asignatura_id_seq1 OWNED BY public.asignatura.id;


--
-- Name: carrera; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera (
    id integer NOT NULL,
    nombre character varying(255)
);


ALTER TABLE public.carrera OWNER TO postgres;

--
-- Name: carrera_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carrera_id_seq OWNER TO postgres;

--
-- Name: carrera_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_seq OWNED BY public.carrera.id;


--
-- Name: direccion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.direccion (
    id integer NOT NULL,
    calle character varying(255),
    ciudad character varying(255)
);


ALTER TABLE public.direccion OWNER TO postgres;

--
-- Name: direccion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.direccion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.direccion_id_seq OWNER TO postgres;

--
-- Name: direccion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.direccion_id_seq OWNED BY public.direccion.id;


--
-- Name: estudiante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estudiante (
    rut character varying(255) NOT NULL,
    apellido character varying(255),
    id_carrera integer,
    id_direccion integer,
    nombre character varying(255),
    edad integer
);


ALTER TABLE public.estudiante OWNER TO postgres;

--
-- Name: estudiante_asignatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estudiante_asignatura (
    id integer NOT NULL,
    id_asignatura integer,
    rut_estudiante character varying(255)
);


ALTER TABLE public.estudiante_asignatura OWNER TO postgres;

--
-- Name: estudiante_asignatura_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estudiante_asignatura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estudiante_asignatura_id_seq OWNER TO postgres;

--
-- Name: estudiante_asignatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estudiante_asignatura_id_seq OWNED BY public.estudiante_asignatura.id;


--
-- Name: asignatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asignatura ALTER COLUMN id SET DEFAULT nextval('public.asignatura_id_seq1'::regclass);


--
-- Name: carrera id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id SET DEFAULT nextval('public.carrera_id_seq'::regclass);


--
-- Name: direccion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direccion ALTER COLUMN id SET DEFAULT nextval('public.direccion_id_seq'::regclass);


--
-- Name: estudiante_asignatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_asignatura ALTER COLUMN id SET DEFAULT nextval('public.estudiante_asignatura_id_seq'::regclass);


--
-- Data for Name: asignatura; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asignatura (id, nombre, id_carrera) FROM stdin;
\.


--
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (id, nombre) FROM stdin;
1	INFORMATICA
2	PEDAGOGIA
3	PSICOLOGIA
\.


--
-- Data for Name: direccion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.direccion (id, calle, ciudad) FROM stdin;
1	calle 1	ciudad 1
2	calle2	ciudad2
3	calle3	ciudad3
4	calle4	ciudad4
\.


--
-- Data for Name: estudiante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estudiante (rut, apellido, id_carrera, id_direccion, nombre, edad) FROM stdin;
rut1	asdd	1	2	asd	23
rut2	gonzalez	1	1	pepito	23
rut3	apellido3	2	3	nombre3	\N
rut4	apellido4	3	4	nombre4	\N
\.


--
-- Data for Name: estudiante_asignatura; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estudiante_asignatura (id, id_asignatura, rut_estudiante) FROM stdin;
\.


--
-- Name: asignatura_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.asignatura_id_seq1', 1, false);


--
-- Name: carrera_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_seq', 3, true);


--
-- Name: direccion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.direccion_id_seq', 4, true);


--
-- Name: estudiante_asignatura_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estudiante_asignatura_id_seq', 1, false);


--
-- Name: asignatura asignatura_pkey1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asignatura
    ADD CONSTRAINT asignatura_pkey1 PRIMARY KEY (id);


--
-- Name: carrera carrera_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT carrera_pkey PRIMARY KEY (id);


--
-- Name: direccion direccion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direccion
    ADD CONSTRAINT direccion_pkey PRIMARY KEY (id);


--
-- Name: estudiante_asignatura estudiante_asignatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_asignatura
    ADD CONSTRAINT estudiante_asignatura_pkey PRIMARY KEY (id);


--
-- Name: estudiante estudiante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante
    ADD CONSTRAINT estudiante_pkey PRIMARY KEY (rut);


--
-- Name: asignatura asignatura_carrera_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asignatura
    ADD CONSTRAINT asignatura_carrera_id_fk FOREIGN KEY (id_carrera) REFERENCES public.carrera(id);


--
-- Name: estudiante_asignatura estudiante_asignatura_asignatura_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_asignatura
    ADD CONSTRAINT estudiante_asignatura_asignatura_id_fk FOREIGN KEY (id_asignatura) REFERENCES public.asignatura(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: estudiante_asignatura estudiante_asignatura_estudiante_rut_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_asignatura
    ADD CONSTRAINT estudiante_asignatura_estudiante_rut_fk FOREIGN KEY (rut_estudiante) REFERENCES public.estudiante(rut) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: estudiante estudiante_carrera_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante
    ADD CONSTRAINT estudiante_carrera_id_fk FOREIGN KEY (id_carrera) REFERENCES public.carrera(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: estudiante estudiante_direccion_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante
    ADD CONSTRAINT estudiante_direccion_id_fk FOREIGN KEY (id_direccion) REFERENCES public.direccion(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

