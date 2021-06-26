<?php

namespace App\Controller;

use App\Entity\Plat;
use App\Form\Plat1Type;
use App\Repository\PlatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    public function new(Request $request, LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        $plat = new Plat();
        $form = $this->createForm(Plat1Type::class, $plat);

        $form->submit($data);
        //$form->handleRequest($request);
        if (!$form->isValid()) {
            $errors = $this->getErrorsFromForm($form);
            $data = [
                'type' => 'validation_error',
                'title' => 'There was a validation error',
                'errors' => $errors
            ];
            return new JsonResponse($data, 400);
        }
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($plat);
            $entityManager->flush();
            return new JsonResponse(true);
            return $this->redirectToRoute('api_plat_index');
        }
        return new JsonResponse(false);
    }

    /**
     * @Route("/mass", name="api_plat_mass", methods={"GET","POST"})
     */
    public function mass(PlatRepository $platRepository): Response
    {
        dump("Hey");
        $plats = $platRepository->findAll();
        $response = new Response();
        for ($i = 0; $i < count($plats); ++$i) {
            //Simple way to do a mass action
            //$plats[$i]->setLinkImage("Carbonara.jpg");
        }
        $this->getDoctrine()->getManager()->flush();
        return $this->redirectToRoute('api_plat_index');
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

    private function getErrorsFromForm(FormInterface $form)
    {
        $errors = array();
        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childErrors = $this->getErrorsFromForm($childForm)) {
                    $errors[$childForm->getName()] = $childErrors;
                }
            }
        }
        return $errors;
    }
}
