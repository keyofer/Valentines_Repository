"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const LOVE_LETTERS = [
  {
    id: 1,
    title: "The First Spark",
    icon: "✨",
    color: "pink.100",
    message:
      "Remember the first time we met on call? I knew right then that I'm gonna be so smitten and super 'Marupok' with you.",
  },
  {
    id: 2,
    title: "My Favorite Thing About You",
    icon: "📸",
    color: "red.100",
    message:
      "Your carefree personalities makes things easy to go by. I like that you're super open with me, but also respect my boundaries a lot of the times. ",
  },
  {
    id: 3,
    title: "Why You?",
    icon: "❤️",
    color: "purple.100",
    message:
      "Because you are you. Super handsome, hot, respectful, mature, understanding. Even if you are a bit boring at times, It gives me the chance to think real hard on what things I can do with you. I like that you are not the type to just go with the flow, but also know when to be spontaneous and fun.",
  },
  {
    id: 4,
    title: "A Promise",
    icon: "🤞",
    color: "blue.100",
    message:
      "I promise to always be by your side, may you be poor or rich. May you not have money to buy us groceries in the future, wherever part of the world you want to go, visit or stay at. Just for the better or worse.",
  },
  {
    id: 5,
    title: "The Future",
    icon: "🚀",
    color: "orange.100",
    message:
      "I can't wait to see you. Can't wait to see what else we accomplish together. I hope that this love last longer 'til the day we can grow old and gray as we enjoy the farm life that you crave.",
  },
  {
    id: 6,
    title: "The Best Decision",
    icon: "⚖️",
    color: "yellow.100",
    message:
      "Swiping right on your profile by accepting your match, meeting you and giving us a chance is ONE OF THE BEST DECISIONS I've ever made this year so far. YOU are just the best thing that ever happened to me.",
  },
];

const NO_PHRASES = [
  "No 😢",
  "Are you sure? 🤨",
  "Please no? 🥺",
  "Don't do this... 💔",
  "Think again! 🧐",
  "Wrong button! 😂",
  "Final answer? 😱",
  "I'm gonna cry... 😭",
  "Let's talk about this! ✋",
  "Button broken 🚫",
  "Still no? 😤",
  "Okay, that's mean! 💀",
];

export default function ValentinePage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState("ask");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 100, y: 0 }); // Initial offset from center
  const [hoverCount, setHoverCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const moveNoButton = () => {
    // Large range for chaotic flying
    const x = Math.random() * 600 - 300;
    const y = Math.random() * 500 - 250;
    setNoBtnPosition({ x, y });
    setHoverCount((prev) => prev + 1);
  };

  const handleOpenLetter = (letter) => {
    setSelectedLetter(letter);
    setStep("read");
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF69B4", "#FF1493", "#FFC0CB", "#ffffff"],
    });
  };

  const handleAccept = () => {
    setStep("celebrate");
    setTimeout(() => setStep("gallery"), 2000);
  };

  if (step === "ask") {
    const currentNoPhrase = NO_PHRASES[hoverCount % NO_PHRASES.length];

    return (
      <Box
        h="100vh"
        w="100vw"
        backgroundImage="url('/valen-wall.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="blackAlpha.400"
          zIndex={1}
        />

        <MotionBox
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          zIndex={2}
        >
          <Card.Root
            bg="whiteAlpha.950"
            boxShadow="2xl"
            borderRadius="3xl"
            p="10"
            maxW="lg"
            textAlign="center"
          >
            <Card.Body>
              <Text fontSize="5xl" mb="4">
                💌
              </Text>
              <Heading size="3xl" color="pink.600" mb="4" fontStyle="italic">
                Will you be my Valentine?
              </Heading>
              <Text fontSize="lg" color="gray.700" mb="10">
                {hoverCount > 0
                  ? "You're persistent, I'll give you that! 😅"
                  : "I've been thinking about you a lot..."}
              </Text>

        
              <Flex
                justify="center"
                align="center"
                position="relative"
                height="100px"
              >
                <Button
                  colorPalette="pink"
                  size="xl"
                  onClick={handleAccept}
                  boxShadow="lg"
                  zIndex={3}
                  _hover={{ transform: "scale(1.05)" }}
                >
                  YES!
                </Button>

                
                <MotionButton
                  position="absolute"
                  colorPalette="gray"
                  variant="outline"
                  size="lg"
                  onMouseEnter={moveNoButton}
                  animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                  transition={{
                    type: "spring",
                    stiffness: 1200,
                    damping: 20,
                  }}
                  style={{
                    opacity: hoverCount > 25 ? 0 : 1,
                    pointerEvents: hoverCount > 25 ? "none" : "auto",
                  }}
                  whiteSpace="nowrap"
                  zIndex={4}
                >
                  {currentNoPhrase}
                </MotionButton>
              </Flex>
            </Card.Body>
          </Card.Root>
        </MotionBox>
      </Box>
    );
  }

  if (step === "celebrate") {
    return (
      <Flex
        h="100vh"
        w="100vw"
        bg="pink.400"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        p={4}
      >
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          mb={8}
        >
          <Box
            as="img"
            src="/dancing-cat.gif"
            alt="Dancing Cat"
            borderRadius="2xl"
            boxShadow="2xl"
            maxW="300px"
          />
        </MotionBox>
        <Heading color="white" size="3xl" mb={2}>
          YAY! Best choice ever!
        </Heading>
        <Text color="whiteAlpha.900" fontSize="xl">
          Loading your special messages...
        </Text>
      </Flex>
    );
  }

  if (step === "read" && selectedLetter) {
    return (
      <Flex
        h="100vh"
        w="100vw"
        align="center"
        justify="center"
        bg={selectedLetter.color}
        p="6"
      >
        <Card.Root maxW="md" borderRadius="3xl" boxShadow="2xl" bg="white">
          <Card.Body p="10" textAlign="center">
            <Text fontSize="6xl">{selectedLetter.icon}</Text>
            <Heading size="lg" my="4">
              {selectedLetter.title}
            </Heading>
            <Text fontSize="lg" color="gray.700" mb="8">
              "{selectedLetter.message}"
            </Text>
            <Button
              onClick={() => setStep("gallery")}
              colorPalette="pink"
              variant="subtle"
            >
              Back
            </Button>
          </Card.Body>
        </Card.Root>
      </Flex>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50" py="20">
      <Container maxW="3xl">
        <VStack gap="10">
          <Box position="relative" overflow="hidden">
            <Heading
              size="3xl"
              color="pink.500"
              fontWeight="bold"
              fontStyle="italic"
            >
              For My Valentine 💌
            </Heading>
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bgGradient="linear(to-r, transparent, rgba(255,255,255,0.8), transparent)"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" w="full">
            {LOVE_LETTERS.map((letter) => {
              const consistentDuration = (letter.id % 3) * 0.5 + 1.5;
              return (
                <MotionBox
                  key={letter.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => handleOpenLetter(letter)}
                >
                  <Card.Root
                    cursor="pointer"
                    bg={letter.color}
                    h="160px"
                    borderRadius="2xl"
                    border="none"
                    _hover={{ boxShadow: "lg" }}
                    position="relative"
                    overflow="hidden"
                  >
                    <Card.Body
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                    >
                      <MotionBox
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: consistentDuration,
                          ease: "easeInOut",
                        }}
                        fontSize="3xl"
                      >
                        {letter.icon}
                      </MotionBox>
                      <Heading size="md" textAlign="center" px="4">
                        {letter.title}
                      </Heading>
                      <MotionBox
                        position="absolute"
                        top="10px"
                        right="10px"
                        fontSize="2xl"
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        ❤️
                      </MotionBox>
                    </Card.Body>
                  </Card.Root>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
