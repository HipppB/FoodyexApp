import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import { and } from "react-native-reanimated";

function stepper(defaultvalue = 0, min = 0, max = 10) {
  let steppervalue = defaultvalue;

  let minstepper = min;
  let maxstepper = max;
  console.log(steppervalue);
}
function stepperchange(step) {
  if (
    (step <= 0 && steppervalue === minstepper) ||
    (step >= 0 && steppervalue === maxstepper)
  ) {
    steppervalue += step;
  }
}
