var fs = require('fs');
var path = require('path');
var iniparser = require('iniparser');

module.exports = (function(){
  var dirname = process.cwd(),
      workingDirname = path.basename(process.cwd()),
      homeDir,
      osUserName,
      globalGitConfigFile,
      workingDirGitConfigFile,
      repositoryType,
      gitUser,
      gitHomepage,
      gitBugsUrl,
      gitRepository;

  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE;
    osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
  }
  else {
    homeDir = process.env.HOME || process.env.HOMEPATH;
    osUserName = homeDir && homeDir.split('/').pop() || 'root';
  }

  globalGitConfigFile = path.join(homeDir, '.gitconfig');
  workingDirGitConfigFile = path.join(dirname, '.git', 'config');
  user = {};

  try {
    if (fs.existsSync(globalGitConfigFile)) {
      var gGitConfig = require('iniparser').parseSync(globalGitConfigFile);
      user = gGitConfig.user;
    }
  } catch (error) {
    
  }

  try {
    if (fs.existsSync(workingDirGitConfigFile)) {
      var gitConfig = require('iniparser').parseSync(workingDirGitConfigFile);
      user = gitConfig.user || user;
      gitRepository = gitConfig['remote "origin"'].url;
      gitHomepage = gitRepository.replace(/\.git$/i, '') + '#readme';
      gitBugsUrl = gitRepository.replace(/\.git$/i, '') + '/issues';
      repositoryType = 'git';
    }
  } catch (error) {
    
  }

  return {
    name: workingDirname,
    userName: osUserName || format(user.name || ''),
    author: user.name || '',
    email: user.email || '',
    homepage: gitHomepage || '',
    repositoryType: repositoryType || '',
    repositoryUrl: repositoryType ? repositoryType + '+' + gitRepository : '',
    bugsUrl: gitBugsUrl || '',
  };
})();