<?php

namespace App\Controller;

use App\Entity\Plat;
use App\Form\Plat1Type;
use App\Repository\PlatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("/api/plat")
 */
class ApiPlatController extends AbstractController
{
    /**
     * @Route("/", name="api_plat_index", methods={"GET"})
     */
    public function index(PlatRepository $platRepository): Response
    {   
        $plats = $platRepository->findAll();
        $response = new Response();
        $data = [];
        for ($i = 0; $i < count($plats); ++$i) {
                array_push($data, $plats[$i]->getAllDataInArray());
        }
        return $this->json($data);

    }

    /**
     * @Route("/new", name="api_plat_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $plat = new Plat();
        $form = $this->createForm(Plat1Type::class, $plat);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($plat);
            $entityManager->flush();

            return $this->redirectToRoute('api_plat_index');
        }

        return $this->render('api_plat/new.html.twig', [
            'plat' => $plat,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="api_plat_show", methods={"GET"})
     */
    public function show(Plat $plat): Response
    {
        return $this->render('api_plat/show.html.twig', [
            'plat' => $plat,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="api_plat_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Plat $plat): Response
    {
        $form = $this->createForm(Plat1Type::class, $plat);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('api_plat_index');
        }

        return $this->render('api_plat/edit.html.twig', [
            'plat' => $plat,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="api_plat_delete", methods={"POST"})
     */
    public function delete(Request $request, Plat $plat): Response
    {
        if ($this->isCsrfTokenValid('delete'.$plat->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($plat);
            $entityManager->flush();
        }

        return $this->redirectToRoute('api_plat_index');
    }
}
