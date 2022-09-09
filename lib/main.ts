#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLayerExampleStack } from './stacks/cdkLayerExampleStack';

const devEnv = {
  account: '146191261538',
  region: 'eu-west-1',
};

const app = new cdk.App();
new CdkLayerExampleStack(app, 'CdkLayerExampleStack', { env: devEnv });
